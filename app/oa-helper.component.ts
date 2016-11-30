import { Component, OnInit } from '@angular/core';

import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

import { ListService } from './list.service';

import { OAModel, Blog, PointsValue } from './oamodel';
import { Rule } from './rule';

@Component({
  selector: 'oa-helper',
  templateUrl: 'app/oa-helper.component.html',
  styleUrls: ['app/oa-helper.component.css']
})

export class OAHelperComponent implements OnInit {

  rules: Array<Rule> = [];
  formattedRules: Array<any> = [];
  qualities: Array<any> = [{text: 'Excellent', value: 2}, {text: 'Good', value: 1}, {text: 'Average', value: 0}];

  blogs: Array<Blog> = [];
  blogToAdd: Blog = { url: '', rcPoints: this.qualities[0].value };
  model = new OAModel({value: null, points: null}, {value: null, points: null}, {value: null, points: null}, {value: null, points: null}, this.blogs, {value: null, points: null}, {value: null, points: null}, {value: null, points: null}, {value: null, points: null}, {value: null, points: null}, {value: null, points: null}, {value: null, points: null}, {value: null, points: null}, {value: null, points: null}, {value: null, points: null}, {value: null, points: null}, {value: null, points: null}, {value: null, points: null}, {value: null, points: null}, {value: null, points: null});

  addBlogButtonText: string = 'Add more blog';
  isBlogUrlValid: boolean = false;
  blogIndex: number = null;
  active: boolean = true;
  // isBlogQualityValid: boolean = true;

  constructor(private listService: ListService) { }

  formatRules() {
    let finalRule = {};

    $.each(this.rules, function (key, item) {
        var tempArray = {};
        var tempVar = {}
        tempArray[item.formula] = item.value;
        tempVar[item.head] = tempArray;
        finalRule = $.extend(true, finalRule, tempVar);
    });
    this.formattedRules = finalRule; 
    console.log(this.formattedRules);
  }

  ngOnInit(): void {
    this.listService.getRules().then(rules => { this.rules = rules; this.formatRules(); });
  }

  onSubmit() {
    console.log(this.model);
  }

  testUrl() {
    let pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (pattern.test(this.blogToAdd.url)) {
      this.isBlogUrlValid = true;
    } else {
      this.isBlogUrlValid = false;
    }
  }

  // add new blog
  addBlog() {
    if (this.addBlogButtonText === 'Save') {
      this.addBlogButtonText = 'Saving';
      setTimeout(() => {
        this.model.blogs.splice(this.blogIndex, 1, this.blogToAdd);
        this.blogToAdd = { url: '', rcPoints: this.qualities[0].value };
        this.addBlogButtonText = 'Add more blog';
        this.active = false;
        setTimeout(() => this.active = true, 0);
        this.isBlogUrlValid = false;
        this.blogIndex = null;
      }, 1000);
    } else {
      this.addBlogButtonText = 'Adding';
      setTimeout(() => {
        this.model.blogs.push(this.blogToAdd);
        this.blogToAdd = { url: '', rcPoints: this.qualities[0].value };
        this.addBlogButtonText = 'Add more blog';
        this.active = false;
        setTimeout(() => this.active = true, 0);
        this.isBlogUrlValid = false;
      }, 1000);
    }
  }

  // edit existing blog
  editBlog(i: number) {
    console.log(i);
    this.blogIndex = i;
    this.addBlogButtonText = 'Save';
    this.blogToAdd = { url: '', rcPoints: this.qualities[0].value };
    this.isBlogUrlValid = true;
  }

  // delete existing blog
  deleteBlog(i: number) {
    console.log(i);
    this.model.blogs.splice(i, 1);
  }

  public beforeChange($event: NgbTabChangeEvent) {
    // $event.preventDefault();
    // if ($event.nextId === 'bar') {}
    switch ($event.nextId) {
      case "firsttab":
        //this.calPoints();
        //console.log("firsttab");
        break;
      case "secondtab":
        //this.calPoints();
        break;
      case "thirdtab":
        //this.calPoints();
        break;
      case "fourthtab":
        //this.calPoints();
        break;
    }
  };
  checkPoints(event: any, selector: string, element: PointsValue) {
    //console.log(Math.min.apply(null, ages.filter(checkAdult)));
    let found: boolean = false;

    for (let x in this.formattedRules[selector]) {
      if(element.value) {
        if(parseInt(x) > element.value) {
          element.points = this.formattedRules[selector][x];
          found = true;
          break;
        }
      } else {
        element.points = 0;
        break;
      }
    }
    if(!found) {
      element.points = this.formattedRules[selector][x];
    }
    this.model[selector] = element;
    console.log(this.model, element);
  }
}
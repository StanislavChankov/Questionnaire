import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import csharpQuestions from '../../csharp-section.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatAccordion)
  public accordion: MatAccordion;
  public csharpTopicQuestionAnswers: TopicQuestionAnswer[];

  constructor() {
    console.log(csharpQuestions);
    this.csharpTopicQuestionAnswers = csharpQuestions;
  }
}

export interface TopicQuestionAnswer {
  topicName: string;
  questionAnswers: QuestionAnswer[];
}

export interface QuestionAnswer {
  question: string;
  answer: string;
}

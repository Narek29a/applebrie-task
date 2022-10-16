import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostsComponent } from './user-posts.component';
import {UserService} from "../../../services/user/user.service";
import {ActivatedRoute} from "@angular/router";
import {from} from "rxjs";

describe('UserPostsComponent', () => {
  let component: UserPostsComponent;
  let fixture: ComponentFixture<UserPostsComponent>;
  let userService: UserService;
  let activatedService: ActivatedRoute;

  const spyUserService = jasmine.createSpyObj('UserService', ['getUsers', 'getPosts']);
  const spyActivatedRoutes = from([{id: 1}])
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: UserService, useValue: spyUserService
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: spyActivatedRoutes,
          },
        }
      ],
      declarations: [ UserPostsComponent ]
    })
    .compileComponents();
    userService = TestBed.inject(UserService);
    activatedService = TestBed.inject(ActivatedRoute);
    fixture = TestBed.createComponent(UserPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const elem = fixture.nativeElement
    expect(elem.querySelector('h2').innerText).toEqual('User Posts');
  });


});

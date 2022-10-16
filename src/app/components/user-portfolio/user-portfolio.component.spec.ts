import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserPortfolioComponent} from './user-portfolio.component';
import {UserService} from "../../services/user/user.service";
import {PropertiesService} from "../../services/properties/properties.service";
import {UserModel} from "../../models/user/user.model";
import {of} from "rxjs";
import {PostModel} from "../../models/user/post.model";

export const mockUsers: UserModel[] = [
  {
    "id": 1,
    "name": "Leanne Graham lll",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  }
]
export const postsMock: PostModel[] = [
  {
    "userId": 1,
    "id": 1,
    "title": "user 1 post 1 title",
    "body": "user 1 post 1 body"
  },

  {
    "userId": 2,
    "id": 1,
    "title": "user 2 post 2 title",
    "body": "user 2 post 2 body"
  },
  {
    "userId": 3,
    "id": 1,
    "title": "user 3 post 3 title",
    "body": "user 3 post 3 body"
  },
]

describe('UserPortfolioComponent', () => {
  let component: UserPortfolioComponent;
  let fixture: ComponentFixture<UserPortfolioComponent>;
  let userService: UserService;
  const spyUserService = jasmine.createSpyObj('UserService', ['getUsers', 'getPosts']);
  const spyPropertyService = jasmine.createSpyObj('PropertiesService', ['getProperty']);

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      providers: [
        {
          provide: UserService, useValue: spyUserService
        },
        {
          provide: PropertiesService, useValue: spyPropertyService
        }
      ],
      declarations: [UserPortfolioComponent]
    }).compileComponents();
    userService = TestBed.inject(UserService);
    fixture = TestBed.createComponent(UserPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create user service instance', () => {
    expect(userService).toBeTruthy();
  });
  it('should create component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should create table', () => {
    const userStubValue = of(mockUsers);
    const postStubValue = of(postsMock);
    spyUserService.getUsers.and.returnValue(userStubValue);
    spyUserService.getPosts.and.returnValue(postStubValue);
    component = fixture.componentInstance;
    const elem = fixture.nativeElement
    expect(elem.querySelector('h2').innerText).toEqual('User Portfolio');
    expect(elem.querySelector('th').innerText).toEqual('Username');
    expect(elem.querySelectorAll('td')[1].innerText).toEqual('Sincere@april.biz');


  });

  it('should provide data', () => {
    const userStubValue = of(mockUsers);
    spyUserService.getUsers.and.returnValue(userStubValue);
    userService.getUsers().subscribe((users: UserModel[]) => {
      expect(users).not.toBe([]);
    });
  });

});

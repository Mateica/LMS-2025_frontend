import { TestBed } from '@angular/core/testing';

import { RegisteredUserService } from './registered-user.service';
import { RegisteredUser } from '../../model/registered-user';

describe('RegisteredUserService', () => {
  let service: RegisteredUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisteredUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getById',()=>{
    it('should find user with the given id',()=>{
      
    })
  })

  describe('create', ()=>{
    it('should add a user', () =>{
      const user : RegisteredUser = {
        id : 1,
        username: '',
        password : '',
        forumUsers : []
      }

      service.create(user);
      expect(service.getAll()).toHaveSize(1);
    })
  })

  describe('update', ()=>{
    it('should update the user with the given id',()=>{
      const user : RegisteredUser = {
        id : 1,
        username: '',
        password : '',
        forumUsers : []
      }

      const newUser : RegisteredUser = {
        id : 1, 
        username: 'someotherusername', 
        password : 'someotherpassword',
        forumUsers: []
      }

      service.update(user.id, newUser);
      expect(user.username).toBe(newUser.username);
      expect(user.password).toBe(newUser.password);
      expect(user.forumUsers).toBe(newUser.forumUsers);
    })
  })

  describe('delete',()=>{
    it('should delete the user with the given id', ()=>{
      const user : RegisteredUser = {
        id : 1,
        username: '',
        password : '',
        forumUsers : []
      }

      service.delete(user.id);
      expect(service.getAll()).toHaveSize(0);
    })
  })
});

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';
import { Player } from '../models/player.model';
import { Club } from '../models/club.model';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
  })

export class BackendService {

    public _playerUrl = environment.serverUrl + "/api/player/";
    public _clubUrl = environment.serverUrl + "/api/club/"
    public _userUrl = environment.serverUrl + "/api/user/";
    public _gameUrl = environment.serverUrl + "/api/game/";

    constructor(private http: HttpClient ){}

    //User URL's
    deleteUser(name, pass ) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'name': name,
              'password': pass
            })
          };
        return this.http.delete<any>(this._userUrl, httpOptions );
    }

    editUser(user: {}) {
        console.log(user)
        return this.http.put<any>(this._userUrl, user);
    }


    //Player URL's
    getPlayers() {
        return this.http.get<any>(this._playerUrl);
    }

    getPlayer(_id: any) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              '_id': _id
            })
          };
        return this.http.get<any>(this._playerUrl, httpOptions);
    }

    getPlayerById(_id: any) {
        return this.http.get<any>(this._playerUrl + '' + _id);
    }

    createPlayer(player: {}) {
        console.log(player)
        return this.http.post<any>(this._playerUrl, player);
    }

    editPlayer(player: {}, _id: any) {
        console.log(player)
        return this.http.put<any>(this._playerUrl + _id, player);
    }

    deletePlayer(_id: any) {
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          '_id': _id
        })
      };
    return this.http.delete<any>(this._playerUrl + _id, httpOptions );
    }

    //Club getters and setters

    getClubs() {
        return this.http.get<any>(this._clubUrl);
    }

    getClub(_id: any) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              '_id': _id
            })
          };
        return this.http.get<any>(this._clubUrl, httpOptions);
    }

    getClubById(_id: any) {
        return this.http.get<any>(this._clubUrl + '' + _id);
    }

    createClub(club: {}) {
        console.log(club)
        return this.http.post<any>(this._clubUrl, club);
    }

    editClub(club: {}, _id: any) {
        console.log(club)
        return this.http.put<any>(this._clubUrl + _id, club);
    }

    deleteClub(_id: any) {
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          '_id': _id
        })
      };
    return this.http.delete<any>(this._clubUrl + _id, httpOptions );
    }
    
  //Game getters and setters

  getGames() {
    return this.http.get<any>(this._gameUrl);
  }

  getGame(_id: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        '_id': _id
      })
    };
    return this.http.get<any>(this._gameUrl, httpOptions);
  }

  getGameById(_id: any) {
    return this.http.get<any>(this._gameUrl + '' + _id);
  }

  createGame(game: {}) {
    console.log(game)
    return this.http.post<any>(this._gameUrl, game);
  }

  editGame(game: {}, _id: any) {
    console.log(game)
    return this.http.put<any>(this._gameUrl + _id, game);
  }

  deleteGame(_id: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        '_id': _id
      })
    };
    return this.http.delete<any>(this._gameUrl + _id, httpOptions);
  }
}
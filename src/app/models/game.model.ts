import { Club } from '../models/club.model'

export class Game {
    constructor(
        public _id: String,
        public date: Date,
        public location: String,
        public startTime: Date,
        public endTime: Date,
        public clubOne: Club,
        public clubTwo: Club
    ) { }
}
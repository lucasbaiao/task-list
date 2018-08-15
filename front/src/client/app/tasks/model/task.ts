export class Task {

    constructor(public id: string,
        public title: string,
        public content: string,
        public status: number,
        public createdAt: string,
        public lastUpdate: string,
        public completedAt: string) {

    }
}

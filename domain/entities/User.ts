// domain/entities/User.ts
export class User {
    constructor(
      public readonly id: string,
      public name: string,
      public email: Email
    ) {}
  }
  
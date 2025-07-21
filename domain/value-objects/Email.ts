// domain/value-objects/Email.ts
export class Email {
    private constructor(private readonly value: string) {}
  
    static create(email: string): Email {
      if (!email.includes("@")) throw new Error("Invalid email")
      return new Email(email)
    }
  
    getValue(): string {
      return this.value
    }
  }
  
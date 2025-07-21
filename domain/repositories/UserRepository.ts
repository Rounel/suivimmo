import { User } from "../entities/User"
import { Email } from "../value-objects/Email"

// domain/repositories/UserRepository.ts
export interface UserRepository {
    create(user: User): Promise<void>
    findByEmail(email: Email): Promise<User | null>
  }
  
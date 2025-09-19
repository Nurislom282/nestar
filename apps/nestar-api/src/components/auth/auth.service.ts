import { Injectable } from '@nestjs/common';
import * as bycript from 'bcryptjs';

@Injectable()
export class AuthService {
	public async hashPassword(memberPassword: string): Promise<string> {
		const salt = await bycript.genSalt();
		return await bycript.hash(memberPassword, salt);
	}

	public async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
		return await bycript.compare(password, hashedPassword);
	}
}

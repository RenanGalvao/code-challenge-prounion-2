import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator'

export class SignInDto {
	@IsNotEmpty()
	@IsEmail()
	email!: string
	@IsNotEmpty()
	@IsString()
	@MinLength(8)
	password!: string
}

import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './aut/auth.module';
import { NoteModule } from './note/note.module';

@Module({
  imports: [
    AuthModule, 
    UserModule, 
    NoteModule // Auto import module
    // another module
  ],
})
export class AppModule {}

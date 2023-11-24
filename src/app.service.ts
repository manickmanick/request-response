import { Injectable } from '@nestjs/common';
import { RequestService } from './request.service';

@Injectable()
export class AppService {

  constructor(
    private readonly requestService : RequestService
  ){}

  getHello(): string {
    const userid = this.requestService.getUserId()
    console.log("userid",userid);
    return 'Hello World!';
  }
}

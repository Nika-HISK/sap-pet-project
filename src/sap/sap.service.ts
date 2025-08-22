import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { config } from 'dotenv';
config();

@Injectable()
export class SapService {
  private baseUrl = 'https://sandbox.api.sap.com/successfactorsfoundation';

  constructor(private readonly http: HttpService) {}

  async getStatements(type: string, country: string) {
    const url = `${this.baseUrl}/statements?type=${type}&country=${country}`;
    console.log(url);
    
    const response = await firstValueFrom(
      this.http.get(url, {
        headers: {
          'APIKey': process.env.SAP_API_KEY, 
          'Accept': 'application/json',
        },
      }),
    );

    return response.data;
  }
}

import { Component, OnInit } from '@angular/core';
import { ServerService } from './service/server.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
	providers: [ServerService]
})
export class AppComponent {
  title = 'app';

	constructor(private serverService: ServerService) {}

	async onServerTest() {
		let reply = await this.serverService.sendPost('/api/crm/google/test')
		console.log(`reply: ${JSON.stringify(reply,null,2)}`)
	}
}

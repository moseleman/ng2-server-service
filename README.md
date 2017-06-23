# ng2-server-service
angular2 server connect file

in src/assets/config.js file
```javascript

{
  "testMode": true,
  "url":"http://example.com",
  "testUrl":"http://example.com"
}

```

## Example
```javascript
import { ServerService } from 'ng2-server-service/server.service'

export class Example {

  private token: object

  constructor(private serverService: ServerService) {
    this.token = {token:'ABCDEFG'}
  }

  async ngOnInit() {
    let reply = await this.serverService.sendPost('/api/heartbit', this.token)
    ...
  }
}

```
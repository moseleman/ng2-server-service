import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import 'rxjs/add/operator/toPromise'
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/of'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class ServerService {

	serverUrl: string

	constructor(private http: Http, private router: Router) {
		this.load()
	}

	load() {
		this.http.get(`assets/config.json`)
			.map(res => res.json())
			.catch(err => Observable.of(err.ststus || 404))
			.subscribe(data => {
				//console.log(`server service data: ${JSON.stringify(data,null,2)}`)
				if (data.testMode === false) {
					this.serverUrl = data.url
					return
				} 

				this.serverUrl = data.testUrl
			})
	}

	async sendGet(uri: string, data: object = {}): Promise<any> {
		let keys = Object.keys(data)
		let params: URLSearchParams = new URLSearchParams()

		let length = keys.length, key
		for (let i = 0; i < length; i++) {
			key = keys[i]
			params.set(key, data[key])
		}
		let search = {search: params}

		let url = `${this.serverUrl}${uri}`
		if (uri.startsWith('http:') || uri.startsWith('https:')) {
			url = uri
		}
		console.log(`server GET: ${url}`)

		let result
		await this.http.get(url, search).toPromise()
		.then(res => {
			result = res.json()
		}).catch(e => {console.error(e)})

		return result
	}

	async sendPost(uri: string, data: object = {}): Promise<any> {
		let headers = new Headers({'Content-Type': 'application/json'})
		let options = new RequestOptions({ headers: headers, method: 'post' })

		let url = `${this.serverUrl}${uri}`		
		if (uri.startsWith('http:') || uri.startsWith('https:')) {
			url = uri
		}
		console.log(`server POST: ${url}`)

		let result
		await this.http.post(url, data, options).toPromise()
		.then(res => {
			result = res.json()
		}).catch(e => {console.error(e)})

		return result
	}
}

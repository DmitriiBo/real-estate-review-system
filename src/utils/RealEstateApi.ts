class RealEstateApi {
  readonly baseUrl: string;

  readonly defaultHeaders: HeadersInit;

  constructor(options: { baseUrl: string }) {
    this.baseUrl = options.baseUrl;
    this.defaultHeaders = {
      'Content-Type': 'application/json; charset=utf-8',
    };
  }

  private getHeaders(): HeadersInit {
    const token = localStorage.getItem('token');

    return {
      ...this.defaultHeaders,
      Authorization: `Bearer ${token}`,
    };
  }

  private async get(url: string, options?: { headers?: HeadersInit }) {
    return fetch(`${this.baseUrl}/${url}`, {
      headers: options?.headers || this.defaultHeaders,
      method: 'GET',
    });
  }

  private async post(url: string, options: { headers?: HeadersInit; body: unknown }) {
    return fetch(`${this.baseUrl}/${url}`, {
      headers: options.headers || this.getHeaders(),
      method: 'POST',
      body: JSON.stringify(options.body),
    });
  }

  public async getData(url: string, options?: { headers?: HeadersInit }): Promise<void> {
    return this.get(url, options).then((response) => response.json());
  }

  public async postData(url: string, options: { headers?: HeadersInit; body: unknown }) {
    return this.post(url, options);
  }
}

const realEstateApi = new RealEstateApi({
  baseUrl: 'https://jsonplaceholder.typicode.com',
});

export default realEstateApi;
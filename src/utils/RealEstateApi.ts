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
    if (token) {
      return {
        ...this.defaultHeaders,
        Authorization: `Bearer ${token}`,
      };
    }
    return {
      ...this.defaultHeaders,
    };
  }

  private async get(url: string, options?: { headers?: HeadersInit }) {
    return fetch(`${this.baseUrl}/${url}`, {
      headers: options?.headers || this.defaultHeaders,
      method: 'GET',
      // mode: 'no-cors',
    });
  }

  private async post(url: string, options: { headers?: HeadersInit; body: unknown }) {
    return fetch(`${this.baseUrl}/${url}`, {
      headers: options.headers || this.getHeaders(),
      method: 'POST',
      // mode: 'no-cors',
      body: JSON.stringify(options.body),
    });
  }

  public async postData(url: string, options: { headers?: HeadersInit; body: unknown }) {
    return this.post(url, options);
  }

  public async getRealEstateData(url: string, options?: { headers?: HeadersInit }): Promise<JSON> {
    return this.get(url, options).then((response) => response.json());
  }
}

const realEstateApi = new RealEstateApi({
  baseUrl: 'http://localhost:8000',
});

export default realEstateApi;

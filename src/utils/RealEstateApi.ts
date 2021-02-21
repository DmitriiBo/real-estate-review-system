class RealEstateApi {
  readonly baseUrl: string;

  readonly headers: HeadersInit;

  public fullUrl: string;

  constructor(object: { theBaseUrl: string; theHeaders: HeadersInit }) {
    this.baseUrl = object.theBaseUrl;
    this.headers = object.theHeaders;
    this.fullUrl = '';
  }

  async getData(url: string) {
    this.fullUrl = this.baseUrl + url;
    return fetch(this.fullUrl, { headers: this.headers }).then((response) => response.json());
  }
}
const realEstateApi = new RealEstateApi({
  theBaseUrl: 'https://jsonplaceholder.typicode.com',
  theHeaders: {
    'Content-Type': 'application/json',
  },
});

realEstateApi.getData('/posts').then((data) => console.log({ data }));

export default realEstateApi;

export default class RestoService{
    _apiBase = 'http://localhost:3001';

  async getResource(url) {
      const response = await fetch(`${this._apiBase}${url}`);
      if (!response.ok){
          throw new Error(`Could not fetch ${url}, received ${response.status}`);
      }
      return await response.json();
  }

  async getMenuItems() {
    return await this.getResource('/menu/');
  }
}

// export default class RestoService{
//   url = 'http://localhost:3001/menu';

//   getMenuItems = async () => {
//       const response = await fetch(this.url);
//       if (!response.ok){
//           throw new Error('Server Error');
//       }
//       const result = await response.json();
//       return result;
//   }
// }
const apiKey =
  "Gsf_T7So-2dGOyFgcgX1ylMi5BWMBcWj0gBK0_rHhujRyBxujPwFenIEABcKaJpB55-tV-OdIuUGAtXglIwJFP9NrFxKKR-_qDKh1GBRdz86beY1ZOhwz7Y7Hn8tZHYx";

  const Yelp = {
    search(term, location, sortBy) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }));
        }
      });
    }
  };
  
  export default Yelp;

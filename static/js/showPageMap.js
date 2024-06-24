
maptilersdk.config.apiKey = maptilerApiKey;
      const map = new maptilersdk.Map({
        container: 'map',
        style: "bright",
        center: geoData , 
        zoom: 14,
      });
      new maptilersdk.Marker()
    .setLngLat(geoData)
    .setPopup(
        new maptilersdk.Popup({ offset: 25 })
            .setHTML(
                `<h3>${data.title}</h3><p>${data.location}</p>`
            )
    )
    .addTo(map)
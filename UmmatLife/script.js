$(document).ready(function () {
    const circleGrid = $('.row');
    const circleData = [
      { imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Chennai_Central.jpg', title: 'Chennai' },
      { imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/CHIL_SEZ.jpg', title: 'Coimbatore' },
      { imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Dindigul_Fort2.JPG', title: 'Dindigul' },
      { imgUrl: 'https://dynamic.tourtravelworld.com/package-images/photo-small/dir_17/496434/181050.jpg', title: 'Erode' },
      { imgUrl: 'https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2018/05/Muttukadu-Boating.jpg', title: 'Kanchipuram' },
      { imgUrl: 'https://www.fabhotels.com/blog/wp-content/uploads/2021/05/Kanyakumari_600x400.jpg', title: 'Kanyakumari' },
      { imgUrl: 'https://static.javatpoint.com/tourist-places/images/tourist-places-in-karur.png', title: 'Karur' },
      { imgUrl: 'https://static.javatpoint.com/tourist-places/images/tourist-places-in-madurai5.png', title: 'Madurai' },
      { imgUrl: 'https://static.javatpoint.com/tourist-places/images/tourist-places-in-salem6.png', title: 'Salem' },
      { imgUrl: 'https://static.javatpoint.com/tourist-places/images/tourist-places-in-tenkasi2.png', title: 'Tenkasi' },
      { imgUrl: 'https://img.traveltriangle.com/blog/wp-content/uploads/2020/05/800px-Sunrise_in_Tuticorin_beach.jpg', title: 'Thuthukudi' },
      { imgUrl: 'https://blogs.revv.co.in/blogs/wp-content/uploads/2021/11/Thanjavur-Waterfalls.jpg', title: 'Thanjavur' },
      { imgUrl: 'https://media-cdn.tripadvisor.com/media/photo-c/1280x250/09/a4/54/c8/kolukkumalai-tea-estate.jpg', title: 'Theni' },
      { imgUrl: 'https://ramyashotels.com/wp-content/uploads/2021/05/agaya-gangai-waterfalls.jpg', title: 'Tiruchy' },
      { imgUrl: 'https://www.templedarshanyatri.com/upload/papanasam-temple-tirunelveli.jpg', title: 'Tirunelveli' },
      { imgUrl: 'https://tourismtn.com/wp-content/uploads/2020/12/Amaravathi-River-1.jpg', title: 'Tiruppur' },
      { imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Vellore_Fort_and_Jalakandeswarar_temple_%2812%29.jpg/1000px-Vellore_Fort_and_Jalakandeswarar_temple_%2812%29.jpg', title: 'Vellore' },
      { imgUrl: 'https://www.touristpanda.com/wp-content/uploads/2023/01/Auroville-1-1024x768.jpg', title: 'Villupuram' },
    ];

    // Loop through the data and create circles dynamically
    $.each(circleData, function (index, data) {
      const li = $('<li></li>');
      const stateName = $('<div></div>');
      const circleItem = $('<div></div>');

      li.addClass('circle-item').addClass(`circle-img-${index + 1}`);
      circleItem.addClass('circle-item');
      stateName.addClass('state-name');

      circleItem.css('background-image', `url(${data.imgUrl})`);
      stateName.html(`<h3>${data.title}</h3>`);

      li.append(circleItem);
      circleGrid.append(li);
      li.append(stateName);
    });
  });

ymaps.ready(init);

function init() {
	var myMap = new ymaps.Map("map", {
		center: [51.66765298, 39.20501223], // коор-ты центра карты "широта, долгота"
		zoom: 14, // уровень масштабирования [0..19]
	});

	myMap.setType('yandex#map');
	myMap.behaviors.disable(['rightMouseButtonMagnifier', 'ruler', 'routeEditor']).enable('drag');

	// BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
 //            '<div class="bln" style="margin: 10px;">' +
 //                '<b>$[properties.name]</b><br />' +
 //                '<i id="count"></i> ' +
 //            '</div>');

    // var placemark = new ymaps.Placemark([51.66433407, 39.20528150], {
    //         name: 'Считаем'
    //     }, {
    //         balloonContentLayout: BalloonContentLayout
    //     });

	var nigilist = new ymaps.Placemark([51.65736157, 39.19278600], {
		    balloonContentHeader: '<span style="color: black; font-size: 19pt">Нигилист</span>',
		    balloonContentBody: '<a href="https://vk.com/micdom" target="_blank" style="text-decoration: underline; color: orange; font-weight: 600; font-size: 12pt">Записаться</a>',
		    balloonContentFooter: '',
		    balloonContentFooter: 'Кирова, 7А',
		    hintContent: 'Нигилист - Кирова, 7А'
    }, {
		preset: 'islands#darkOrangeDotIcon'
	});

	var litera = new ymaps.Placemark([51.66433407, 39.20528150], {
	    balloonContentHeader: '<span style="color: black; font-size: 19pt">Литера Б</span>',
	    balloonContentBody: '<a href="https://vk.com/event161911454" target="_blank" style="text-decoration: underline; color: orange; font-weight: 600; font-size: 12pt">Записаться</a>',
	    balloonContentFooter: '',
	    balloonContentFooter: 'Театральная улица, 36',
	    hintContent: 'Литера Б - Театральная улица, 36'
	}, {
		preset: 'islands#darkOrangeDotIcon'
	});

	var bristol = new ymaps.Placemark([51.66619907, 39.20632350], {
	    balloonContentHeader: '<span style="color: black; font-size: 19pt">Бристоль</span>',
	    balloonContentBody: '<a href="https://vk.com/openmicbristol" target="_blank" style="text-decoration: underline; color: orange; font-weight: 600; font-size: 12pt">Записаться</a>',
	    balloonContentFooter: '',
	    balloonContentFooter: 'Проспект Революции, 43 (2 этаж)',
	    hintContent: 'Бристоль - Проспект Революции, 43 (2 этаж)'
    }, {
		preset: 'islands#darkOrangeDotIcon'
	});

	var set_puaro = new ymaps.Placemark([51.67351657, 39.21248650], {
	    balloonContentHeader: '<span style="color: black; font-size: 19pt">Сэт-лист в Пуаро</span>',
	    balloonContentBody: '<a href="https://vk.com/setlistpuaro" target="_blank" style="text-decoration: underline; color: orange; font-weight: 600; font-size: 12pt">Записаться</a>',
	    balloonContentFooter: '',
	    balloonContentFooter: '20-летия ВЛКСМ ул., 54А',
	    hintContent: 'Пуаро - 20-летия ВЛКСМ ул., 54А'
    }, {
		preset: 'islands#redDotIcon'
	});

	openMic = new ymaps.GeoObjectCollection();

	openMic
		.add(nigilist)
		.add(litera)
		.add(bristol)
		.add(set_puaro);
	var openMicLayout = ymaps.templateLayoutFactory.createClass(
		'<div class="openMic-containter">' +
			'$[properties.balloonContentHeader]' +
			'$[properties.balloonContentBody' +
			'$[properties.balloonContentFooter' +
			'$[properties.balloonContentFooter' + 
		'</div>'
	);
 	ymaps.layout.storage.add('my#theaterlayout', openMicLayout);
 	myMap.geoObjects.add(openMic);
	// myMap.geoObjects.add(nigilist);
	// myMap.geoObjects.add(litera);
	// myMap.geoObjects.add(bristol);
	// myMap.geoObjects.add(set_puaro);


	// Балун откроется в точке «привязки» балуна — т. е. над меткой.
	// nigilist.balloon.open();
}
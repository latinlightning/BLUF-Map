mapboxgl.accessToken = 'pk.eyJ1IjoiY21hZGVyYTE5OTUiLCJhIjoiY2w1aWY1eGtjMDdobDNxcGJ4MTYzbzM1YyJ9.JPln6zlwXyQ0_UxXqplOMw';
// Create a new map.
const map = new mapboxgl.Map({
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-100.04, 38.907],
    zoom: 3
});

map.on('load', () => {
    // Add a source for the state polygons.
    map.addSource('states', {
        'type': 'geojson',
        'data': 'https://docs.mapbox.com/mapbox-gl-js/assets/ne_110m_admin_1_states_provinces_shp.geojson'
    });

    // Add a layer showing the state polygons.
    map.addLayer({
        'id': 'states-layer',
        'type': 'fill',
        'source': 'states',
        'paint': {
            'fill-color': 'rgba(200, 100, 240, 0.4)',
            'fill-outline-color': 'rgba(200, 100, 240, 1)'
        }
    });


    // When a click event occurs on a feature in the states layer,
    // open a popup at the location of the click, with description
    // HTML from the click event's properties.
    map.on('click', 'states-layer', (e) => {
        let state = e.features[0].properties.name;
        let propBenefits;
        for (let i = 0; i < usPropertyBenefits.length; i++) {
            if (usPropertyBenefits[i].state == state) {
                propBenefits = usPropertyBenefits[i].propertyBenefits;
            }
        }
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML('<h1>' + state + '</h1>' + propBenefits)
            .addTo(map);
    });

    // Change the cursor to a pointer when
    // the mouse is over the states layer.
    map.on('mouseenter', 'states-layer', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change the cursor back to a pointer
    // when it leaves the states layer.
    map.on('mouseleave', 'states-layer', () => {
        map.getCanvas().style.cursor = '';
    });
});


const usPropertyBenefits = [
    {
        state: 'Alabama',
        propertyBenefits: '	A disabled veteran in Alabama may receive a full property tax exemption on his/her primary residence if the veteran is 100 percent disabled as a result of service. Exemptions differ between the state and counties, click here for detailed information.',
    },
    {
        state: 'Alaska',
        propertyBenefits: '	A disabled veteran in Alabama may receive a full property tax exemption on his/her primary residence if the veteran is 100 percent disabled as a result of service. Exemptions differ between the state and counties, click here for detailed information.',
    },
    {
        state: 'Arizona',
        propertyBenefits: '	A disabled veteran in Alaska may receive a property tax exemption of up to the first $150,000 of the assessed value of his/her primary residence if the veteran is 50 percent or more disabled as a result of service. The exemption transfers to a surviving spouse if the veteran is deceased from a service connected cause.',
    },
    {
        state: 'Arkansas',
        propertyBenefits: '	A disabled veteran in Arkansas may receive a full property tax exemption on his/her primary residence if the veteran is blind in one or both eyes, lost the use of one or more limbs or is 100 percent permanently and totally disabled as a result of service.',
    },
    {
        state: 'California',
        propertyBenefits: '	There are two categories for full property tax exemptions in California. Eligible veterans or their surviving spouse may receive a basic exemption if the assessed value does not exceed $100,000. This number is adjusted annually for inflation and is currently $143,273 for 2020. The second category is a low income exemption of the assessed value does not exceed $150,000 when the household income does not exceed an adjusted limit of $64,337 in 2020. Both categories are for full property tax exemptions',
    },
    {
        state: 'Colorado',
        propertyBenefits: 'A veteran with a 100 percent disability rating in Colorado may receive a property tax exemption of 50 percent of the first $200,000 of the actual value of his/her primary residence. A property tax deferral exists for eligible veterans over the age of 65 and for active duty personnel.',
    },
    {
        state: 'Connecticut',
        propertyBenefits: "	All veterans with a disability rating of 75 percent or more in Connecticut may receive a property tax exemption of $3,000 from the total assessed value of his/her property if the veteran served at least 90 days of active duty during wartime and are honorably discharged. Veterans with ratings between 10 percent and 75 percent are eligible for a $1,500 value deduction. For more seriously disabled veterans, there may be an additional $10,000. Veterans below a certain income level and/or disabled veterans are eligible for additional exemptions. Contact your municipality's Tax Assessor for specific details",
    },
    {
        state: 'Delaware',
        propertyBenefits: 'Veterans with a 100 percent disability rating may be eligible for a tax credit against 100 percent of non-vocational school district property tax.',
    },
    {
        state: 'Florida',
        propertyBenefits: "	A disabled veteran in Florida may be able to reduce their property's assessed value by $5, 000 if they are 10 percent or more disabled from a result of service.If the veteran is 100 percent disabled as a result from service then they may receive a full property tax exemption.Other homestead exemptions may exist for veterans over the age of 65 and surviving spouses."
    },
    {
        state: 'Georgia',
        propertyBenefits: '	A disabled veteran in Georgia may receive a property tax exemption of $60,000 or more on his/her primary residence if the veteran is 100 percent disabled, depending on a fluctuating index rate set by the U.S. Secretary of Veterans Affairs. The current amount is $85,645; property in excess of this exemption remains taxable.'
    },
    {
        state: 'Hawaii',
    },
    {
        state: 'Idaho',
    },
    {
        state: 'Illinois',
    },
    {
        state: 'Indiana',
    },
    {
        state: 'Iowa',
    },
    {
        state: 'Kansas',
    },
    {
        state: 'Kentucky',
    },
    {
        state: 'Louisiana',
    },
    {
        state: 'Maine',
    },
    {
        state: 'Maryland',
    },
    {
        state: 'Massachusetts',
    },
    {
        state: 'Michigan',
    },
    {
        state: 'Minnesota',
    },
    {
        state: 'Mississippi',
    },
    {
        state: 'Missouri',
    },
    {
        state: 'Montana',
    },
    {
        state: 'Nerbaska',
    },
    {
        state: 'Nevada',
    },
    {
        state: 'New Hampshire',
    },
    {
        state: 'New Jersey',
    },
    {
        state: 'New Mexico',
    },
    {
        state: 'New York',
    },
    {
        state: 'North Carolina',
    },
    {
        state: 'North Dakota',
    },
    {
        state: 'Ohio',
    },
    {
        state: 'Oklahoma',
    },
    {
        state: 'Oregon',
    },
    {
        state: 'Pennsylvania',
    },
    {
        state: 'Rhode Island',
    },
    {
        state: 'South Carolina',
    },
    {
        state: 'South Dakota',
    },
    {
        state: 'Tennessee',
    },
    {
        state: 'Texas',
    },
    {
        state: 'Utah',
    },
    {
        state: 'Vermont',
    },
    {
        state: 'Virginia',
    },
    {
        state: 'Washington',
    },
    {
        state: 'West Virginia',
    },
    {
        state: 'Wisconsin',
    },
    {
        state: 'Wyoming',
    },


];
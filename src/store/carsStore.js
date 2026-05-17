import { defineStore } from "pinia";

export const useCarStore = defineStore("carStore", {
  state: () => ({
    cars: [
      {
        company: "BMW",
        brandLogo: "BMW",
        modelName: "BMW X1",
        year: 2009,
        newestCar: false,
        modelImage: "BMWX1",
        condition: "New",
        price: 25000,
        description: `The BMW X1 is a premium subcompact luxury crossover
        SUV designed for urban driving and light outdoor adventures.
        It combines the elevated driving position of an SUV with the
        agile handling of a smaller hatchback.`,
      },
      {
        company: "Chevrolet",
        brandLogo: "Chevrolet",
        modelName: "Chevrolet Camaro ZL1",
        year: 2017,
        newestCar: false,
        modelImage: "zl1",
        condition: "New",
        price: 62000,
        description: `The Chevrolet Camaro ZL1 is a high-performance American muscle car 
  built for both the street and the track. It combines an aggressive, aerodynamic 
  design with a supercharged V8 engine to deliver extreme power and precision handling.`,
      },
      {
        company: "Lamborghini",
        brandLogo: "Lamborghini",
        modelName: "Lamborghini Huracán LP 610-4",
        year: 2014,
        newestCar: false,
        modelImage: "huracan1",
        condition: "New",
        price: 240000,
        description: `The Lamborghini Huracán is a mid-engine exotic supercar 
  engineered for breathtaking speed and striking aesthetics. It pairs a fierce, 
  naturally aspirated V10 engine with an advanced all-wheel-drive system to offer 
  hyper-responsive track dynamics and an iconic exhaust note.`,
      },
      {
        company: "Audi",
        brandLogo: "Audi",
        modelName: "Audi RS4 Avant",
        year: 2012,
        newestCar: false,
        modelImage: "rs4_avant",
        condition: "New",
        price: 85000,
        description: `The Audi RS4 Avant is a high-performance luxury station wagon 
  that perfectly blends everyday family utility with sports car track capabilities. 
  It features a high-revving, naturally aspirated V8 engine paired with Audi's legendary 
  quattro all-wheel-drive system for maximum grip and versatility.`,
      },
      {
        company: "Infiniti",
        brandLogo: "Infiniti",
        modelName: "Infiniti Q70",
        year: 2015,
        newestCar: false,
        modelImage: "q70_silver",
        condition: "Used",
        price: 50000,
        description: `The Infiniti Q70 is a premium midsize luxury sedan that blends 
  expressive, flowing exterior styling with a meticulously crafted cabin. It offers 
  engaging rear-wheel or all-wheel-drive performance dynamics, backed by smooth 
  V6 power and a rich array of intuitive driver technologies.`,
      },
      {
        company: "Porsche",
        brandLogo: "Porsche",
        modelName: "Porsche Cayman (981)",
        year: 2014,
        newestCar: false,
        modelImage: "cayman_yellow",
        condition: "Used",
        price: 53000,
        description: `The Porsche Cayman is a mid-engine premium sports coupe renowned for 
  its near-perfect weight distribution and telepathic handling. Featuring a high-revving 
  flat-six engine and exceptional chassis dynamics, it offers an incredibly pure and 
  engaging driving experience.`,
      },
      {
        company: "BMW",
        brandLogo: "BMW",
        modelName: "BMW X5 (F15)",
        year: 2014,
        newestCar: false,
        modelImage: "x5_brown",
        condition: "New",
        price: 53000,
        description: `The BMW X5 is a midsize luxury SUV that blends premium cabin comfort 
  with dynamic road manners. It features a spacious interior, advanced technology options, 
  and a versatile range of powerful turbocharged engines to handle both family trips and spirited driving.`,
      },
      {
        company: "BMW",
        brandLogo: "BMW",
        modelName: "BMW 6 Series Convertible (E64)",
        year: 2006,
        newestCar: false,
        modelImage: "6series_convertible_black",
        condition: "Used",
        price: 77000,
        description: `The BMW 6 Series Convertible is a premium grand touring open-top sports car 
  that fuses high-end luxury with athletic open-air performance. It delivers a refined, 
  comfortable cabin, a distinctively sculpted exterior, and a smooth, powerful engine 
  built for effortless long-distance cruising.`,
      },
      {
        company: "Chevrolet",
        brandLogo: "Chevrolet",
        modelName: "Chevrolet Camaro LT",
        year: 2016,
        newestCar: true,
        modelImage: "camaro_yellow_lt",
        condition: "New",
        price: 26000,
        description: `The Chevrolet Camaro LT is an agile and stylish modern muscle coupe 
  that offers everyday drivability without sacrificing sporty dynamics. It combines a 
  sharply sculpted exterior with a driver-focused cockpit, efficient powertrain options, 
  and highly responsive handling.`,
      },
      {
        company: "BMW",
        brandLogo: "BMW",
        modelName: "BMW 3 Series Sedan (F30)",
        year: 2013,
        newestCar: true,
        modelImage: "3series_blue_f30",
        condition: "New",
        price: 36000,
        description: `The BMW 3 Series Sedan is the benchmark compact premium executive car 
  renowned for setting the standard in sports sedan dynamics. It seamlessly integrates a 
  high-quality, tech-forward cabin with sharp, responsive handling and an array of refined, 
  efficient turbocharged engines.`,
      },
      {
        company: "Ferrari",
        brandLogo: "Ferrari",
        modelName: "Ferrari 458 Italia",
        year: 2010,
        newestCar: true,
        modelImage: "ferrari_458_red",
        condition: "New",
        price: 230000,
        description: `The Ferrari 458 Italia is a mid-engine exotic supercar that represents a 
  synthesis of technological innovation, creative flair, passion, and futuristic design. 
  It is powered by a legendary, high-revving naturally aspirated V8 engine that delivers 
  unrivaled track-derived performance and a spine-tingling exhaust note.`,
      },
    ],
  }),
  getters: {
    getNewestCar: (state) => state.cars.filter((car) => car.newestCar === true),
    getFeaturedCars: (state) =>
      state.cars.filter((car) => car.newestCar === false),
  },
  actions: {
    searchCars(modelName) {
      return this.cars.find((car) => modelName === car.modelName);
    },
  },
});

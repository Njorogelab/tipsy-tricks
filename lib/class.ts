export type Drink = {
    idDrink: string;
    strDrink: string;
    strDrinkAlternate: string | null;
    strTags: string | null;
    strVideo: string | null;
    strCategory: string;
    strIBA: string | null;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    strInstructionsES: string | null;
    strInstructionsDE: string | null;
    strInstructionsFR: string | null;
    strInstructionsIT: string | null;
    strInstructionsZH_HANS: string | null;
    strInstructionsZH_HANT: string | null;
    strDrinkThumb: string;
    strIngredient1: string;
    strIngredient2: string | null;
    strIngredient3: string | null;
    strIngredient4: string | null;
    strIngredient5: string | null;
    strIngredient6: string | null;
    strIngredient7: string | null;
    strIngredient8: string | null;
    strIngredient9: string | null;
    strIngredient10: string | null;
    strIngredient11: string | null;
    strIngredient12: string | null;
    strIngredient13: string | null;
    strIngredient14: string | null;
    strIngredient15: string | null;
    strMeasure1: string;
    strMeasure2: string | null;
    strMeasure3: string | null;
    strMeasure4: string | null;
    strMeasure5: string | null;
    strMeasure6: string | null;
    strMeasure7: string | null;
    strMeasure8: string | null;
    strMeasure9: string | null;
    strMeasure10: string | null;
    strMeasure11: string | null;
    strMeasure12: string | null;
    strMeasure13: string | null;
    strMeasure14: string | null;
    strMeasure15: string | null;
    strImageSource: string;
    strImageAttribution: string;
    strCreativeCommonsConfirmed: string;
    dateModified: string;
  }

  
export enum AlcoholicType {
    Alcoholic = "Alcoholic",
    NonAlcoholic = "Non alcoholic",
    OptionalAlcohol = "Optional alcohol"
  }

export enum DrinkCategory {
    OrdinaryDrink = "Ordinary Drink",
    Cocktail = "Cocktail",
    Shake = "Shake",
    OtherUnknown = "Other / Unknown",
    Cocoa = "Cocoa",
    Shot = "Shot",
    CoffeeTea = "Coffee / Tea",
    HomemadeLiqueur = "Homemade Liqueur",
    PunchPartyDrink = "Punch / Party Drink",
    Beer = "Beer",
    SoftDrink = "Soft Drink"
  }

  export enum DrinkGlass {
    HighballGlass = "Highball glass",
    CocktailGlass = "Cocktail glass",
    OldFashionedGlass = "Old-fashioned glass",
    WhiskeyGlass = "Whiskey Glass",
    CollinsGlass = "Collins glass",
    PousseCafeGlass = "Pousse cafe glass",
    ChampagneFlute = "Champagne flute",
    WhiskeySourGlass = "Whiskey sour glass",
    CordialGlass = "Cordial glass",
    BrandySnifter = "Brandy snifter",
    WhiteWineGlass = "White wine glass",
    NickAndNoraGlass = "Nick and Nora Glass",
    HurricaneGlass = "Hurricane glass",
    CoffeeMug = "Coffee mug",
    ShotGlass = "Shot glass",
    Jar = "Jar",
    IrishCoffeeCup = "Irish coffee cup",
    PunchBowl = "Punch bowl",
    Pitcher = "Pitcher",
    PintGlass = "Pint glass",
    CopperMug = "Copper Mug",
    WineGlass = "Wine Glass",
    BeerMug = "Beer mug",
    MargaritaCoupetteGlass = "Margarita/Coupette glass",
    BeerPilsner = "Beer pilsner",
    BeerGlass = "Beer Glass",
    ParfaitGlass = "Parfait glass",
    MasonJar = "Mason jar",
    MargaritaGlass = "Margarita glass",
    MartiniGlass = "Martini Glass",
    BalloonGlass = "Balloon Glass",
    CoupeGlass = "Coupe Glass"
  }
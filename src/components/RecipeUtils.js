export const getRecipe = recipeName => {
  switch (recipeName) {
    case "Vegetable Kebab":
      return "Marinate your favorite vegetables in lemon juice, salt, pepper and add them to a skewer and gril them.";
    case "Hamburger":
      return "Grill the patty, add some onions, tomatoes and layer everything between buns. Enjoy!";
    case "Grilled Chicken":
      return "Allow the chicken to thaw if frozen, marinate for 2 hours and then grill them in the oven for an hour. ";
    case "Pizza":
      return "Prepare the base, let it sit for an hour. Prep the veggies, lay them out on the pizza base, bake for 10 minutes at 400F.";
    case "Potato Soup":
      return "Boil the potatoes in vegetable broth till they become soft. Add salt, pepper and some cajun seasoning. Serve it warm.";
    case "Prawns":
      return "Place the prawns, garlic and 1 1/2 tbsp olive oil in a skillet and cook over high heat for 1 minute, turning and tossing. Sprinkle with salt and pepper";
    case "Spaghetti":
      return "Cook Spaghetti as per directions. Drain the water and add them to a skillet. Stir diced tomatoes, tomato sauce, and tomato paste into the pan. Season with oregano, basil, salt, and pepper.";
    case "Sushi":
      return "Center one sheet nori on a bamboo sushi mat. Using your hands, spread a thin layer of rice on the sheet of nori. Arrange cucumber, ginger, avocado on rice. Lift the end of the mat, and gently roll it over the ingredients, pressing gently. Roll it forward to make a complete roll. Cut each roll into slices.";
    case "Toast Omelette":
      return "Make omelette with 2 egg whites. Toast your favorite bread and butter it. Slice some tomatoes and spinach. Arrange them on a plate.";
    default:
      return "No recipe found!";
  }
};

export const getCalories = recipeName => {
  switch (recipeName) {
    case "Vegetable Kebab":
      return "500";
    case "Hamburger":
      return "1000";
    case "Grilled Chicken":
      return "800";
    case "Pizza":
      return "600";
    case "Potato Soup":
      return "650";
    case "Prawns":
      return "1500";
    case "Spaghetti":
      return "1200";
    case "Sushi":
      return "700";
    case "Toast Omelette":
      return "750";
    default:
      return "Calories not found!";
  }
};

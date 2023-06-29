import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import { RestaurantsScreen } from "../screens/Restaurants/RestaurantsScreen";
import { AddRestaurantScreen } from "../screens/Restaurants/AddRestaurantScreen";
import { RestaurantInfoScreen } from "../screens/Restaurants/RestaurantInfoScreen";
import { AddReviewRestaurantScreen } from "../screens/Restaurants/AddReviewRestaurantScreen";
const Stack = createNativeStackNavigator();

export function RestaurantStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.restaurant.restaurants}
        component={RestaurantsScreen}
        options={{ title: "Restaurantes" }}
      />
      <Stack.Screen
        name={screen.restaurant.addRestaurant}
        component={AddRestaurantScreen}
        options={{ title: "Nuevo restaurante" }}
      />
      <Stack.Screen
        name={screen.restaurant.restaurantInfo}
        component={RestaurantInfoScreen}
        options={{ title: "Información restaurante" }}
      />
      <Stack.Screen
        name={screen.restaurant.addReviewRestaurant}
        component={AddReviewRestaurantScreen}
        options={{ title: "Nueva opinión" }}
      />
    </Stack.Navigator>
  );
}

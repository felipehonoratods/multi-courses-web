import type { Coordinates } from "@/services/types";
import { weatherService } from "@/services/weather";
import { useQuery } from "@tanstack/react-query";

export const WEATHER_KEYS = {
  weather: (coords: Coordinates) => ["weather", coords] as const,
  forecast: (coords: Coordinates) => ["forecast", coords] as const,
  location: (coords: Coordinates) => ["location", coords] as const,
  search: (query: string) => ["location-search", query] as const,
} as const;

export function useWeatherQuery(coordinates: Coordinates | null) {
    return useQuery({
        queryKey: WEATHER_KEYS.weather(coordinates ?? { lat: 0, lon: 0 }),
        queryFn: () => 
            coordinates ? weatherService.getCurrentWeather(coordinates) : null,
        enabled: !!coordinates,
    });
};

export function useForecastQuery(coordinates: Coordinates | null) {
    return useQuery({
        queryKey: WEATHER_KEYS.forecast(coordinates ?? { lat: 0, lon: 0 }),
        queryFn: () => (coordinates ? weatherService.getForecast(coordinates) : null),
        enabled: !!coordinates,
    });
};

export function useReverseGeocodeQuery(coordinates: Coordinates | null) {
    return useQuery({
        queryKey: WEATHER_KEYS.location(coordinates ?? { lat: 0, lon: 0 }),
        queryFn: () =>
            coordinates ? weatherService.reverseGeocode(coordinates) : null,
        enabled: !!coordinates,
    });
};

export function useLocationSearch(query: string) {
    return useQuery({
        queryKey: WEATHER_KEYS.search(query),
        queryFn: () => weatherService.searchLocations(query),
        enabled: query.length >= 3,
    });
}
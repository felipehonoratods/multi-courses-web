import { Layout } from '@/components/layout';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/context/theme-provider';
import { CityPage } from '@/pages/city-page';
import { WeatherDashboard } from '@/pages/weather-dashboard';
import { BrowserRouter, Route, Routes } from 'react-router';

export function Router() {
    return (
        <BrowserRouter>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Layout>
                    <Routes>
                        <Route path="/" element={<WeatherDashboard />} />
                        <Route path="/city/:cityName" element={<CityPage />} />
                    </Routes>
                </Layout>
                <Toaster richColors />
            </ThemeProvider>
        </BrowserRouter>
    )
}
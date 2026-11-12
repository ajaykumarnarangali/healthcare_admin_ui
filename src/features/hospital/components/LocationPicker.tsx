import { useState } from 'react';
import { IconClose } from "../../../components/Icons";
import {
    MapContainer,
    TileLayer,
    Marker,
    useMapEvents
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { LocationMarkerProps, LocationPickerProps } from '../types/hospital.type';

const hospitalMarkerIcon = L.divIcon({
    className: '',
    html: `
        <div class="hospital-map-marker">
            <svg viewBox="0 0 40 48" width="30" height="30"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M20 1C9.5 1 1 9.5 1 20c0 13 19 27 19 27s19-14 19-27C39 9.5 30.5 1 20 1Z"
                    fill="#1a5276"
                    stroke="white"
                    stroke-width="2"
                />
                <rect x="17" y="10" width="6" height="20" rx="1" fill="white"/>
                <rect x="10" y="17" width="20" height="6" rx="1" fill="white"/>
            </svg>
        </div>
    `,
    iconSize: [40, 48],
    iconAnchor: [20, 48],
});


function LocationMarker({
    onLocationSelect,
    currentLocation
}: LocationMarkerProps) {
    const [position, setPosition] = useState<[number, number] | null>(
        currentLocation
            ? [currentLocation.latitude, currentLocation.longitude]
            : null
    );

    useMapEvents({
        click(e) {
            const { lat, lng } = e.latlng;

            setPosition([lat, lng]);

            onLocationSelect({
                latitude: lat,
                longitude: lng
            });
        }
    });

    return position ? <Marker icon={hospitalMarkerIcon} position={position} /> : null;
}

function LocationPicker({
    onLocationSelect,
    currentLocation,
    onClose
}: LocationPickerProps) {
    return (
        <div className="w-full h-[400px] rounded-xl overflow-hidden">
            <MapContainer
                center={[11.2588, 75.7804]}
                zoom={13}
                scrollWheelZoom={true}
                className="w-full h-full"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <LocationMarker
                    {...{ onLocationSelect, currentLocation }}
                />
            </MapContainer>
            <button
                type="button"
                onClick={onClose}
                aria-label="Close map"
                className="absolute top-3 right-3 z-[1000] rounded-full bg-white p-2 shadow-md hover:bg-slate-100"
            >
                <IconClose size={20} />
            </button>
        </div>
    );
}

export default LocationPicker;
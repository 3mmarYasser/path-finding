import React, { useState, useEffect } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation
} from "react-simple-maps";
import features from "../../../../../assets/features.json";
import { getColorByVar } from "../../../../../../utils/color.helper.ts";
import { polygonCentroid } from "d3";
import {FormikProps} from "formik";
import {ContactFormValues} from "../Contact.interface.ts";

interface Props{
    formik:FormikProps<ContactFormValues>;
}
const Map:React.FC<Props> = ({formik}) => {
    const [selectedCountry, setSelectedCountry] = useState<string|null>(null);
    const [annotationCoordinates, setAnnotationCoordinates] = useState<number[]>([0, 0]);

    const handleCountryClick = (geo) => {
        setSelectedCountry(geo.properties.name);
    };

    useEffect(() => {
        if (selectedCountry) {
            const countryData = features.features.find((feature) => feature.properties.name === selectedCountry);
            if (countryData && countryData.geometry) {
                const centroid = calculateCentroid(countryData.geometry);
                setAnnotationCoordinates(centroid);
            }
            formik.setFieldValue("country",selectedCountry)
        }
    }, [selectedCountry]);

    const calculateCentroid = (geometry) => {
        if (geometry.type === "MultiPolygon") {
            const allPolygons = geometry.coordinates.map((polygon) => polygon[0]);
            return polygonCentroid(allPolygons.flat());
        } else if (geometry.type === "Polygon") {
            return polygonCentroid(geometry.coordinates[0]);
        } else {
            return [0, 0];
        }
    };

    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            style={{ width: "100%", height: "100%" }}
            projectionConfig={{
                rotate: [-30, -45, 0],
                scale: 900
            }}
        >
            <Geographies geography={features}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography
                            className="outline-none"
                            key={geo.rsmKey}
                            geography={geo}
                            fill={`oklch(${getColorByVar("--b3")})`}
                            stroke={`oklch(${getColorByVar("--bc")} / 0.2)`}
                            strokeWidth={0.5}
                            onClick={() => handleCountryClick(geo)}
                        />
                    ))
                }
            </Geographies>



            {selectedCountry && (
                <Annotation
                    subject={annotationCoordinates}
                    dx={-90}
                    dy={-30}
                    connectorProps={{
                        stroke: `oklch(${getColorByVar("--bc")})`,
                        strokeWidth: 3,
                        strokeLinecap: "round"
                    }}
                >
                    <text x="-8" textAnchor="end" alignmentBaseline="middle" fill={`oklch(${getColorByVar("--bc")})`}>
                        {selectedCountry}
                    </text>
                </Annotation>
            )}
        </ComposableMap>
    );
};

export default Map;

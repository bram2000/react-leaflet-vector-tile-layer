import {
    createTileLayerComponent, LayerProps, updateGridLayer
} from '@react-leaflet/core';
import L, { TileLayer as LeafletTileLayer, TileLayerOptions } from 'leaflet';
import _mapboxGL from 'mapbox-gl-leaflet';

_mapboxGL.preventRemovalOfUnusedImport = true;

export interface VectorTileLayerProps extends TileLayerOptions, LayerProps {
    style: string
}

export const VectorTileLayer = createTileLayerComponent<
    LeafletTileLayer,
    VectorTileLayerProps
>(function createTileLayer(options, context) {
    return {
        instance: new (L as any).mapboxGL(options),
        context,
    }
}, updateGridLayer)
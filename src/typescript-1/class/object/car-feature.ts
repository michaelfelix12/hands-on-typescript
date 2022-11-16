export interface CarFeature {
    safety(feature: string[]): void
    speed(km: number): void
}

export interface CarSpec {
    engineType(): string
    engineSpec(): string
    fuelType(): string
}
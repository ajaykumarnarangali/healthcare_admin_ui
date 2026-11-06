export interface UserProfileResponse {
    city: string;
    country: string;
    dateOfBirth: string;
    firstName: string;
    gender: "MALE" | "FEMALE" | "OTHER";
    lastName: string;
    phone: string;
    postalCode: string;
    profileCompleted: boolean;
    profilePhoto: string | null;
    profilePhotoPublicId: string | null;
    state: string;
    streetAddress: string;
    userId: string;
}
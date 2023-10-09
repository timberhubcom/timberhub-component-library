import React from 'react';
type ContactCardDetails = {
    src?: string;
    fullName: string;
    location?: string;
    mail: string;
};
type ContactCardProps = {
    title: string;
    details: ContactCardDetails;
    className?: string;
};
export declare const ContactCard: React.ForwardRefExoticComponent<ContactCardProps & React.RefAttributes<HTMLDivElement>>;
export {};

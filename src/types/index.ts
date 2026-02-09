export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'agent' | 'user';
    avatar?: string;
}

export type TicketStatus = 'open' | 'pending' | 'closed';

export interface Ticket {
    id: string;
    subject: string;
    status: TicketStatus;
    customerName: string;
    customerEmail: string;
    lastUpdated: string;
    priority: 'low' | 'medium' | 'high';
}

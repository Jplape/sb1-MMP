export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'technician';
  avatar?: string;
}

export interface Equipment {
  id: string;
  name: string;
  serialNumber: string;
  location: string;
  status: 'operational' | 'maintenance' | 'out-of-service';
  lastMaintenance?: string;
  nextMaintenance?: string;
}

export interface Intervention {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  equipmentId: string;
  technicianId: string;
  scheduledStart: string;
  scheduledEnd: string;
  actualStart?: string;
  actualEnd?: string;
  notes?: string;
  attachments?: string[];
}
export interface FormState {
  code: string | null;
  error: string | null;
  nonAttendance: boolean;
  id: string;
  adults: string[];
  kids: string[];
  message: string | null;
}
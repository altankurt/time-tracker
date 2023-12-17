import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useToast } from "../components/ui/use-toast";

const FormSchema = z.object({
  email: z.string().min(1, "Email is required!").email("Invalid email!"),
  username: z.string().min(2, "Username is required!").max(15, "Username must have less than 15 characters!"),
  password: z.string().min(8, "Password must have more than 8 characters!"),
  confirmPassword: z.string().min(1, "Password confirmation is required!"),
}).refine(data => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords do not match!",
});
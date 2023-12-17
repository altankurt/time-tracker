import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
  password: z.string().min(1, "Password is required!").min(8, "Password must have more than 8 characters!"),
});
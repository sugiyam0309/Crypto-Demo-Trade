"use client";
import { Button } from "@/components/ui/button/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form/form";
import { Input } from "@/components/ui/form/input";
import { useForm } from "react-hook-form";

export const LoginForm = () => {
  const form = useForm();

  const onSubmit = () => {
    console.log("submit!");
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>メールアドレス</FormLabel>
              <FormControl>
                <Input placeholder="example@mail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>パスワード</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                半角数字・半角英字・記号を2種類以上使用してください。
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">ログイン</Button>
      </form>
    </Form>
  );
};

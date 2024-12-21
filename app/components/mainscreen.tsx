import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { CloudIcon as KeyIcon } from "lucide-react";
import { FaGitlab } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { FaBitbucket } from "react-icons/fa";

function Mainscreen() {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left Section - Stats */}
      <div className="p-5 relative flex items-center justify-center bg-gradient-to-br from-blue-50 to-white min-h-screen hidden md:flex">
        <div className="max-w-md ">
          <div className="relative mb-32">
            {/* Main Stats Card */}
            <Card className="p-6 shadow-lg border-0 bg-white rounded-3xl">
              <div className="space-y-5">
                <div className="flex items-center gap-2">
                  <Image
                    src="/logo.png"
                    alt="CodeAnt AI Logo"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <h2 className="text-xl font-semibold text-navy-900">
                    AI to Detect & Autofix Bad Code
                  </h2>
                </div>
                <div className="border border-b" />
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-navy-900">30+</div>
                    <div className="text-sm text-muted-foreground">
                      Language Support
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-navy-900">10K+</div>
                    <div className="text-sm text-muted-foreground">
                      Developers
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-navy-900">
                      100K+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Hours Saved
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Floating Stats Card */}
            <Card className="absolute w-[270px] h-[164px] -bottom-[8rem] -right-[1rem] p-4 shadow-lg border-0 bg-white rounded-3xl">
              <div className="flex items-start justify-between mb-3">
                {/* <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full opacity-80" />
            </div> */}
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center breathing-effect">
                  <div className="w-8 h-8 bg-blue-500 rounded-full opacity-80" />
                </div>
                <div className="bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow-sm border">
                  <span className="text-green-600 text-sm">↑</span>
                  <span className="text-green-600 font-medium text-sm">
                    14%
                  </span>
                  <span className="text-xs text-muted-foreground">
                    This week
                  </span>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">
                  Issues Fixed
                </div>
                <div className="text-3xl font-bold text-navy-900">500K+</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Background Logo */}
        <div className="absolute  left-0 w-60 h-60 opacity-30 -mb-[34rem] hidden md:block ">
          <Image
            src="/Subtract.png"
            alt="Ant Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Right Section - Sign In */}
      <div className="p-6 flex items-center justify-center">
        <Card className="w-full max-w-md p-6 space-y-6">
          <div className="space-y-2 text-center">
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/logo.png"
                alt="CodeAnt AI Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <h1 className="text-2xl font-semibold">CodeAnt AI</h1>
            </div>
            <h2 className="text-3xl font-bold">Welcome to CodeAnt AI</h2>
          </div>

          <Tabs defaultValue="saas" className="w-full">
            <TabsList className="grid w-full grid-cols-2 ">
              <TabsTrigger value="saas">SAAS</TabsTrigger>
              <TabsTrigger value="self-hosted">Self Hosted</TabsTrigger>
            </TabsList>
            <TabsContent value="saas" className="space-y-4">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/main">
                  <GitHubLogoIcon className="mr-2 h-4 w-4" />
                  Sign in with GitHub
                </Link>
              </Button>

              <Button variant="outline" className="w-full" asChild>
                <Link href="#bitbucket">
                  <FaBitbucket color="#3b82f6" />
                  Sign in with Bitbucket
                </Link>
              </Button>

              <Button variant="outline" className="w-full" asChild>
                <Link href="#azure">
                  <VscAzureDevops color="#3b82f6" className=" h-5 w-5" />
                  Sign in with Azure DevOps
                </Link>
              </Button>

              <Button variant="outline" className="w-full" asChild>
                <Link href="#gitlab">
                  <FaGitlab size={10} color="#fb923c" />
                  Sign in with GitLab
                </Link>
              </Button>
            </TabsContent>
            <TabsContent value="self-hosted" className="space-y-4">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/main">
                  <FaGitlab size={10} color="#fb923c" />
                  Self Hosted GitLab
                </Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="#sso">
                  <KeyIcon className="mr-2 h-4 w-4" />
                  Sign in with SSO
                </Link>
              </Button>
            </TabsContent>
          </Tabs>

          <div className="text-center text-sm text-muted-foreground">
            By signing up you agree to the{" "}
            <Link
              href="#privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Mainscreen;

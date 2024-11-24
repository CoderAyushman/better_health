import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
  VKShareButton,
  VKIcon,
  OKShareButton,
  OKIcon,
  TumblrShareButton,
  TumblrIcon,
  LivejournalShareButton,
  LivejournalIcon,
  ViberShareButton,
  ViberIcon,
  LineShareButton,
  LineIcon,
  PocketShareButton,
  PocketIcon,
  InstapaperShareButton,
  InstapaperIcon,
  HatenaShareButton,
  HatenaIcon,
} from "react-share";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Share = () => {
  const url = "https://better-health-chi.vercel.app/";
  const title =
    "🌟 Ready to take control of your health? Discover Better Health – your personal guide to a healthier, happier you! 🧘‍♀️💪 From tailored fitness plans to personalized wellness tips, we've got you covered. Start your journey today and unlock the best version of yourself! 🚀 Better-Health-";

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="w-full">
          <h6 className="text-2xl px-full ">SHARE</h6>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Share and help others.</AlertDialogTitle>
            <AlertDialogDescription>
              <div className="flex flex-wrap gap-5 justify-start items-center">
                <FacebookShareButton url={url} title={title}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton url={url} title={title}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <LinkedinShareButton url={url} title={title}>
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                <WhatsappShareButton url={url} title={title}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <TelegramShareButton url={url} title={title}>
                  <TelegramIcon size={32} round />
                </TelegramShareButton>
                <RedditShareButton url={url} title={title}>
                  <RedditIcon size={32} round />
                </RedditShareButton>
                <EmailShareButton url={url} subject={title}>
                  <EmailIcon size={32} round />
                </EmailShareButton>
                <VKShareButton url={url} title={title}>
                  <VKIcon size={32} round />
                </VKShareButton>
                <OKShareButton url={url} title={title}>
                  <OKIcon size={32} round />
                </OKShareButton>
                <TumblrShareButton url={url} title={title}>
                  <TumblrIcon size={32} round />
                </TumblrShareButton>
                <LivejournalShareButton url={url} title={title}>
                  <LivejournalIcon size={32} round />
                </LivejournalShareButton>
                <ViberShareButton url={url} title={title}>
                  <ViberIcon size={32} round />
                </ViberShareButton>
                <LineShareButton url={url} title={title}>
                  <LineIcon size={32} round />
                </LineShareButton>
                <PocketShareButton url={url}>
                  <PocketIcon size={32} round />
                </PocketShareButton>
                <InstapaperShareButton url={url} title={title}>
                  <InstapaperIcon size={32} round />
                </InstapaperShareButton>
                <HatenaShareButton url={url} title={title}>
                  <HatenaIcon size={32} round />
                </HatenaShareButton>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Cancel</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Share;

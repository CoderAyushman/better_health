declare module 'share-this' {
    interface ShareOptions {
      title?: string;
      description?: string;
      url: string;
      networks: ShareNetworks; // This adds typing for the networks
    }
  
    interface ShareNetworks {
      facebook?: boolean;
      twitter?: boolean;
      whatsapp?: boolean;
      email?: boolean;
      linkedin?: boolean;
      pinterest?: boolean;
      // Add any other networks supported by the library here
    }
  
    class Share {
      constructor(options: ShareOptions);
      open(): void;
    }
  
    export default Share;
  }
  
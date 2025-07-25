import css from "./Alert.module.css";

interface MailboxProps {
  username: string;
  messages: string[];
  unreadMessages: string[];
}

// console.log(css);
export default function Mailbox({username, messages, unreadMessages}: MailboxProps) {
    return (
      <>
        <p className={css.alert}>Hello {username}</p>
        
        {messages.length > 0 && (
          <p>You have {messages.length} unread messages</p>
        )}

        {unreadMessages.length > 0 ? (
        <>
          <p className={css.alert}>You have {unreadMessages.length} unread messages</p>
          <p>Check your inbox to read them!</p>
          <button>Open inbox</button>
        </>
      ) : (
        <p>No unread messages</p>
      )}
      </>
    );
}
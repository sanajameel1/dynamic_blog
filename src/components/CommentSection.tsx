import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

interface Comment {
    id: string;
    author: string;
    text: string;
}

interface CommentSectionProps {
    postId: string;
}

export default function CommentSection({ postId }: CommentSectionProps) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

    // Simulate fetching comments for the postId
    useEffect(() => {
        // Example: Fetch comments for the given postId
        const fetchComments = async () => {
            console.log(`Fetching comments for postId: ${postId}`);
            // Mock fetched comments
            const fetchedComments: Comment[] = [
                { id: "1", author: "John", text: "Great post!" },
                { id: "2", author: "Jane", text: "Really insightful." },
            ];
            setComments(fetchedComments);
        };

        fetchComments();
    }, [postId]);

    const handleAddComment = () => {
        if (newComment.trim() && authorName.trim()) {
            const newCommentObj: Comment = {
                id: new Date().toISOString(),
                author: authorName,
                text: newComment,
            };
            setComments([...comments, newCommentObj]);
            setNewComment('');
            setAuthorName('');
        }
    };

    const handleEditComment = (commentId: string) => {
        const commentToEdit = comments.find((comment) => comment.id === commentId);
        if (commentToEdit) {
            setNewComment(commentToEdit.text);
            setAuthorName(commentToEdit.author);
            setEditingCommentId(commentId);
        }
    };

    const handleSaveEditedComment = () => {
        if (newComment.trim() && authorName.trim() && editingCommentId) {
            const updatedComments = comments.map((comment) =>
                comment.id === editingCommentId
                    ? { ...comment, text: newComment, author: authorName }
                    : comment
            );
            setComments(updatedComments);
            setNewComment('');
            setAuthorName('');
            setEditingCommentId(null);
        }
    };

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-semibold">Comments</h2>

            <div className="mt-4 space-y-4">
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <Card key={comment.id}>
                            <CardContent className="p-4">
                                <div className="font-semibold">{comment.author}</div>
                                <p>{comment.text}</p>
                                <button
                                    onClick={() => handleEditComment(comment.id)}
                                    className="mt-2 text-blue-500"
                                >
                                    Edit
                                </button>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <p className="text-slate-400">No comments yet</p>
                )}
            </div>

            <div className="mt-6">
                <Input
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full mb-2"
                />

                <Input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a Comment"
                    className="w-full mb-2"
                />

                <Button
                    onClick={editingCommentId ? handleSaveEditedComment : handleAddComment}
                    className="mt-4"
                >
                    {editingCommentId ? "Save" : "Submit"}
                </Button>
            </div>
        </div>
    );
}

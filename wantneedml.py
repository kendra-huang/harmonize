from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from  sklearn.metrics import accuracy_score



# https://towardsdatascience.com/machine-learning-text-processing-1d5a2d638958

#Change these based on the incoming data
X_train = df.loc[:24999, 'review'].values
y_train = df.loc[:24999, 'sentiment'].values
X_test = df.loc[25000:, 'review'].values
y_test = df.loc[25000:, 'sentiment'].values

vectorizer = TfidfVectorizer()
train_vectors = vectorizer.fit_transform(X_train)
test_vectors = vectorizer.transform(X_test)
print(train_vectors.shape, test_vectors.shape)

clf = MultinomialNB().fit(train_vectors, y_train)

predicted = clf.predict(test_vectors)
print(accuracy_score(y_test,predicted))